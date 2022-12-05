(function() {
	function Slideshow(element) {
		this.el = document.querySelector(element);
		this.init();
	}
	Slideshow.prototype = {
		init: function() {
			this.wrapper = this.el.querySelector(".slider-wrapper");
			this.links = this.el.querySelectorAll("#slider-nav button");
			this.slides = this.el.querySelectorAll(".slide");
			this.previous = this.el.querySelector(".slider-previous");
			this.next = this.el.querySelector(".slider-next");
			this.index = 0;
			this.total = this.slides.length;
			this.actions();
		},
		_slideTo: function(slide) {
			var currentSlide = this.slides[slide];
			this.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
		},
		actions: function() {
			var self = this;
			self.next.addEventListener("click", function() {
				let cur = document.querySelector('#slider-nav button.current')
				cur.classList.remove('current');
				self.index++;
				cur = document.querySelector(`[data-slide="${self.index}"]`);
				cur.classList.add('current');
				self.previous.style.display = "block";
				if (self.index == self.total - 1) {
					self.index = self.total - 1;
					self.next.style.display = "none";
				}
				self._slideTo(self.index);
			}, false);
			self.previous.addEventListener("click", function() {
				let cur = document.querySelector('#slider-nav button.current')
				cur.classList.remove('current');
				self.index--;
				cur = document.querySelector(`[data-slide="${self.index}"]`);
				cur.classList.add('current');
				self.next.style.display = "block";
				if (self.index == 0) {
					self.index = 0;
					self.previous.style.display = "none";
				}
				self._slideTo(self.index);
			}, false);
			for (let i = 0; i < self.links.length; i++){
				self.links[i].addEventListener("click", function() {
					let cur = document.querySelector('#slider-nav button.current')
					cur.classList.remove('current');
					self.links[i].classList.add('current');
					self.index = i;
					if (self.index == self.total - 1) {
						self.index = self.total - 1;
						self.next.style.display = "none";
					}
					else {
						self.next.style.display = "block";
					}
					if (self.index == 0) {
						self.index = 0;
						self.previous.style.display = "none";
					}
					else {
						self.previous.style.display = "block";
					}
					self._slideTo(self.index);
				});
			}
		}
	};
	document.addEventListener("DOMContentLoaded", function() {
		var slider = new Slideshow("#main-slider");
	});
})();
