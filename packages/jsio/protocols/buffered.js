PKG('from base import *');

PKG('import logging');
PKG('from jsio.interfaces import Protocol');
PKG('from jsio.buffer import Buffer');

var logger = logging.getLogger('Buffered');

exports.BufferedProtocol = Class(Protocol, function(supr) {

	this.init = function() {
		this.buffer = new Buffer();
	}

	// Overwrite this instead of dataReceived in base classes
	this.bufferUpdated = function() {}

	this.dataReceived = function(data) {
		this.buffer.append(data);
		this.bufferUpdated();
	}

})