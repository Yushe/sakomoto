//RePod - Shows thread statistics (number of replies, number of image replies out of all replies) above and below threads.
$(document).ready(function() { repod.thread_stats.init(); });
try { repod; } catch(a) { repod = {}; }
repod.thread_stats = {
	init: function() {
		repod.thread_updater && repod.thread_updater.callme.push(repod.thread_stats.update);
		this.config = {
			enabled: repod.suite_settings && !!repod_jsuite_getCookie("repod_thread_stats_enabled") ? repod_jsuite_getCookie("repod_thread_stats_enabled") === "true" : true
		};
		repod.suite_settings && repod.suite_settings.info.push({menu:{category:'Monitoring',read:this.config.enabled,variable:'repod_thread_stats_enabled',label:'Thread statistics',hover:'Display post and counts at the top and bottom of the page'}});
		this.update();
	},
	update: function() {
		if (repod.thread_stats.config.enabled) {
			$("#repod_thread_stats_container").length == 0 && $("div.theader").before("<span id='repod_thread_stats_container'></span>");
                        $("#repod_thread_stats_container").css("margin-top","-5px");
			$("#repod_thread_stats_container").html(repod.thread_stats.format());
		}
	},
	format: function() { return "<small><i>Thread replies: "+$("td.reply").length + "<br/>Thread images: " + $(".postimg").length+"</i></small>"; }
};