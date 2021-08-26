(function(app, $) {
	if (('widget' in $) && typeof app === 'object') {
		$.widget('jf.searchselect', {
			limit: null,
			search: null,
			input: null,
			button: null,
			container: null,
			timeout: null,
			change: null,
			variants: [],
			_create: function() {
				this.limit = parseInt(this.options.limit) || 10;
				if (this.options.search && typeof this.options.search == 'function') {
					this.search = this.options.search;
				} else {
					return;
				}
				if (this.options.change && typeof this.options.change == 'function') {
					this.change = this.options.change;
				}
				this.input = $('<input type="text" autocomplete="off" value="" placeholder="' + (this.options.placeholder || '') + '" />');
				this.button = $('<button class="btn" type="button"><span class="fa fa-chevron-down"></span><span class="fa fa-spin fa-refresh"></span></button>');
				this.container = $('<div class="input-variants"></div>');
				this.container.append('<ul><li><a href="">&nbsp;</a></li></ul>');
				this.element.attr('type', 'hidden').parent().addClass('search-select').append(this.container);
				this.element.after('<div class="input-append"></div>');
				this.element.next().append(this.input);
				this.element.next().append(this.button);
				this.activate();
			},
			_destroy: function() {
				this.element.attr('type', 'text').parent().removeClass('input-select');
				this.element.siblings().remove();
				if (this.timeout) {
					clearTimeout(this.timeout);
					this.timeout = null;
				}
				var widget = this;
				$(document).off('click touchend', 'body', function(e) {
					widget.rollup();
				});
			},
			activate: function() {
				var widget = this;
				this.sample = this.container.find('li').first();
				this.sample.find('a').click(function(e) {
					e.stopPropagation();
					e.preventDefault();
					widget.refresh();
					widget.container.hide();
				});
				this.input.keyup(function() {
					if (this.timeout) {
						clearTimeout(this.timeout);
						this.timeout = null;
					}
					widget.variants = [];
					widget.element.val(this.value.replace(' ', '').length ? '-1' : '0');
					widget.timeout = setTimeout(function(value) {
						widget.execSearch(value);
					}, 500, this.value);
				});
				this.button.click(function(e) {
					e.stopPropagation();
					e.preventDefault();
					if (this.className.indexOf('disabled') >= 0) {
						return;
					}
					if (widget.container.css('display') != 'block') {
						widget.sample.siblings().remove();
						if (widget.variants && widget.variants.length) {
							widget.setVariants(widget.variants);
						} else {
							widget.execSearch(widget.input.val());
						}
					} else {
						widget.container.hide();
					}
				});
				if (this.element[0].value) {
					var defaultId = parseInt(this.element[0].value) || 0;
					if (defaultId) {
						widget.search(null, function(items) {
							if (items && typeof items == 'object') {
								widget.setDefault(items, defaultId);
							}
						});				
					}
				}
				$(document).on('click touchend', 'body', function(e) {
					widget.rollup();
				});
			},
			setVariants: function(variants) {
				var widget = this;
				var li, _li = widget.sample, n = 0, prev = [], index;
				widget.sample.siblings().each(function() {
					prev.push($(this).children().data('ID'));
				});
				for (var i = 0; i < variants.length; i++) {
					index = prev.indexOf(variants[i].ID);
					if (index == -1) {
						li = _li.clone();
						li.find('a')
							.html(variants[i].Name)
							.data('ID', variants[i].ID)
							.click(function(e) {
								e.stopPropagation();
								e.preventDefault();
								widget.element.val($(this).data('ID'));
								widget.input.val($(this).text());
								widget.container.hide();
								if (typeof widget.change == 'function') {
									widget.change.call(widget, {
										ID: $(this).data('ID'), Name: $(this).text()
									});
								}
							});
						this.container.children().first().append(li);
					} else {
						prev.splice(index, 1);
					}
					if (++n == widget.limit) {
						break;
					}
				}
				if (prev.length) {
					widget.sample.siblings().each(function() {
						if (prev.indexOf($(this).children().data('ID')) >= 0) {
							$(this).remove();
						}
					});
				}
				if (n) {
					this.container.show();
				}
			},
			setDefault: function(variants, defaultId) {
				for (var i = 0; i < variants.length; i++) {
					if (variants[i].ID == defaultId) {
						this.input.val(variants[i].Name);
						break;
					}
				}
			},
			execSearch: function(value) {
				var widget = this;
				widget.search(value, function(items) {
					if (items && typeof items == 'object') {
						widget.variants = items;
						widget.setVariants(items);
					} else {
						widget.sample.siblings().remove();
					}
				});
			},
			refresh: function() {
				this.element.val('0');
				this.input.val('');
				this.variants = [];
				if (typeof this.change == 'function') {
					this.change.call(this, {
						ID: 0, Name: ''
					});
				}
			},
			rollup: function() {
				this.container.hide();
			}
		});

		$.widget('jf.scrolling', {
			_create: function() {
				if (this.options.thumb && typeof this.options.thumb === 'object') {
					this.thumb = $(this.options.thumb);
					this.thumbBorderSize = 2 * (parseInt(this.thumb.css('border-top-width')) || 0);
					this.barHeight = this.element.outerHeight();
				} else {
					return;
				}
				if (this.options.bar && typeof this.options.bar === 'object') {
					this.bar = $(this.options.bar);
					this.barBorderSize = 2 * (parseInt(this.bar.css('border-top-width')) || 0);
					this.barHeight -= this.barBorderSize;
				} else {
					this.barBorderSize = 0;
				}
				if (this.options.containment && typeof this.options.containment === 'object') {
					this.containment = $(this.options.containment);
				} else {
					this.containment = this.element;
				}
				this.resize();
				this.draggable();
				this.mouseable();
			},
			disabled: false,
			scrollTop: function(value) {
				var scrollValue = value / (this.barHeight - this.thumbHeight);
				scrollValue = Math.floor(this.scrollHeight * scrollValue);
				this.element.scrollTop(scrollValue);
			},
			resize: function() {
				this.scrollHeight = this.element.children().first().outerHeight(true) + (parseInt(this.element.css('padding-top')) || 0);
				this.scrollHeight -= (this.barHeight + this.barBorderSize);
				if (this.scrollHeight < 0) {
					this.scrollHeight = 0;
				}
				if (typeof this.bar === 'object') {
					this.barHeight = this.element.outerHeight() - this.barBorderSize;
					this.bar.height(this.barHeight);
				}
				this.thumbHeight = this.barHeight / (this.scrollHeight + this.barHeight);
				this.thumbHeight = Math.floor(this.thumbHeight * this.barHeight);
				this.thumb.height(this.thumbHeight - this.thumbBorderSize);
				if (typeof this.bar === 'object') {
					if (this.thumbHeight != this.barHeight) {
						if (!app.utils.ua.isMobile()) {
							this.bar.show();
						} else {
							this.element.css({overflowY: 'auto'});
						}
					} else {
						this.bar.hide();
					}
				}
			},
			draggable: function() {
				var widget = this;
				this.thumb.draggable({
					axis: 'y',
					containment: 'parent',
					drag: function(e, ui) {
						widget.scrollTop(ui.position.top);
					}
				});
			},
			mouseable: function() {
				var widget = this, timeout = null, count = 0;
				this.containment.on('wheel mousewheel DOMMouseScroll', function(e) {
					if (('onwheel' in window) && e.type == 'DOMMouseScroll' || widget.disabled) {
						return true;
					}
					if (timeout) {
						app.utils.clearTimeout(timeout);
					}
					var delta = -e.originalEvent.deltaY || e.originalEvent.wheelDelta || -e.originalEvent.detail;
					count += (delta > 0) ? 1 : -1;
					timeout = app.utils.setTimeout(function() {
						if (delta && count) {
							var posTop = widget.thumb.position().top;
							var deltaHeight = (widget.barHeight - widget.thumbHeight);
							var deltaPos = Math.min(Math.floor(0.1 * widget.barHeight), widget.thumbHeight) * Math.min(Math.abs(count), 4);
							if (delta > 0) {
								delta = (posTop > deltaPos) ? (-1 * deltaPos) : (-1 * posTop);
							} else {
								delta = (posTop + deltaPos) > deltaHeight ? (deltaHeight - posTop) : deltaPos;
							}
							count = 0;
							posTop += delta;
							if (posTop >= 0 && posTop <= deltaHeight) {
								widget.thumb.animate({top: posTop + 'px'}, 100);
								widget.scrollTop(posTop);
							}
						}
					}, 50);
				});
			},
			disable: function() {
				this.disabled = true;
				this.thumb.draggable('disable');
			},
			enable: function() {
				this.disabled = false;
				this.resize();
				this.thumb.draggable('enable');
			}	
		});
	}
})(jFpst, jQuery);