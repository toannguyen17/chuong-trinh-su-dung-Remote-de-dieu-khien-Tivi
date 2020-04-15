
let Remote = function(tivi) {
	this.Tivi = tivi;
}

Remote.prototype.changerActive = function(){
	this.Tivi.changerActive();
}
// chuyển kênh suống
Remote.prototype.toChannel = function() {
	if(this.Tivi.getStatus()){
		let enterChannel = Number(prompt('Enter Channel.'));
		this.Tivi.setChannel(enterChannel);
	}
}

// chuyển kênh lên
Remote.prototype.channelUp = function() {
	this.Tivi.getStatus() && this.Tivi.channelUp();
}
// chuyển kênh suống
Remote.prototype.channelDown = function() {
	this.Tivi.getStatus() && this.Tivi.channelDown();
}

//tăng âm lượng
Remote.prototype.volumeUp = function() {
	this.Tivi.getStatus() && this.Tivi.volumeUp();
}
//giảm âm lượng
Remote.prototype.volumeDown = function() {
	this.Tivi.getStatus() && this.Tivi.volumeUp();
}
