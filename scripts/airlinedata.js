var airlinesData = function(timeToLoad) {
	this.busyTime = timeToLoad || 1000;
};

airlinesData.prototype = function() {
	var ffInfo = {
		firstName: 'VirtualEdge Admin', lastName: 'West', ffNum: '0', status: 'Diamond', miles: 0,
    
		flights: [
			{
				id: 1111, cNum: 'ABCDED',timeToCheckIn: false,currentSegment:0,
				segments: [
					{ from: 'Shivang Patel', to: 'Ravi Velluvali', departDate: '6/1/2012', time: '5:00PM', flightNum: '111', seat: '5A', gate: 'C10' }
				]
			},{
				id: 1112, cNum: 'DSLEMS', timeToCheckIn: false,currentSegment:0,
				segments: [
					{ from: 'Dheeraj Bhatt', to: 'Vadim Chernets', departDate: '6/17/2012', time: '4:00PM', flightNum: '124', seat: '5D', gate: 'B1' }
				]
			}
		]
	},
    
	getDataforFF = function(id, callback) {
		fauxAjax(function () {
			callback(ffInfo);
		}, 'getting your data ...', this);
	},
    
	logOn = function (uid, pwd, callback) {
		fauxAjax(function () {
			callback('12345678', true);
		}, 'logging you in ...', this);
	},
    
	fauxAjax = function fauxAjax(func, text, thisObj) {
		$.mobile.loading('show', { theme: 'a', textVisible: true, text:text });
		window.setTimeout(function () {
			$.mobile.loading('hide');
			func();
           
		}, thisObj.busyTime);
	};
    
	return{
		logOn:logOn,
		getDataforFF:getDataforFF
	}
}();