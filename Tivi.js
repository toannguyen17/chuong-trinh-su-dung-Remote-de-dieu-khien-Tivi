
let Tivi = function(idEl) {
	this.el      = document.getElementById(idEl);
	this.active  = false; // trạng thái hoạt động
	this.channel = 1;        // max 120
	this.volume  = 30;       // max 100

	this.elStatus  = this.el.querySelector('#status');
	this.elChannel = this.el.querySelector('#channel');
	this.elVolume  = this.el.querySelector('#volume');
}

// trạng thái kích hoạt
Tivi.prototype.getStatus = function() {
	return this.active;
}
// thay đổi trạng thái kích hoạt
Tivi.prototype.changerActive = function() {
	this.active = !this.active;
	this.update();
}
// lấy kênh hiện tại
Tivi.prototype.getChannel = function() {
	return this.channel;
}
// thay đổi kênh
Tivi.prototype.setChannel = function(channel) {
	if (channel > 120) {
		this.channel = 1;
	}else if (channel < 1) {
		this.channel = 120;
	}else{
		this.channel = channel;
	}
	this.update();
}

// chuyển kênh lên
Tivi.prototype.channelUp = function() {
	let channel = this.channel+1;
	this.setChannel(channel);
	this.update();
}
// chuyển kênh suống
Tivi.prototype.channelDown = function() {
	let channel = this.channel-1;
	this.setChannel(channel);
	this.update();
}

// lấy âm lượng
Tivi.prototype.getVolume = function() {
	return this.volume;
}
// thay đổi âm lượng
Tivi.prototype.setVolume = function(volume) {
	if (volume > 100) {
		this.volume = 100;
	}else if (volume < 1) {
		this.volume = 0;
	}else{
		this.volume = volume;
	}
	this.update();
}

//tăng âm lượng
Tivi.prototype.volumeUp = function() {
	let volume = this.volume+1;
	this.setVolume(volume);
	this.update();
}
//giảm âm lượng
Tivi.prototype.volumeDown = function() {
	let volume = this.volume-1;
	this.setVolume(volume);
	this.update();
}

// nhận được tín hiệu từ Remote
Tivi.prototype.update = function() {
	this.elStatus.innerText  = this.getStatus() ? 'ON' : 'OFF';
	this.elChannel.innerText = this.getChannel();
	this.elVolume.innerText  = this.getVolume();
}
