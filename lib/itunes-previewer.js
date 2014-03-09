var iTunesPreviewer = (function($) {
  'use strict';
  var bind = function(fn, scope) { return function() { fn.apply(scope); }; };

  var trackIdReceived = function(data) {
    var e = $('*[data-track-id=' + data.results[0].trackId + ']')
      .attr('data-audio-preview-url', data.results[0].previewUrl)
      .attr('class', 'glyphicon glyphicon-play');
  };

  var loadTrack = function() {
    $(this).attr('class', 'glyphicon glyphicon-cog animated continuous rotateInOut');
    $('head').append('<script src="http://itunes.apple.com/lookup?callback=iTunesPreviewer.trackIdReceived&&id=' + this.getAttribute('data-track-id') + '"/></script>');
  };

  var playTrack = function() {
    var firstTime = $(this).find('audio').length === 0;
    if ( firstTime ) {
      $(this).append('<audio src=' + $(this).data('audio-preview-url') + '/></audio>');
    }

    var audio = $(this).find('audio')[0];
    audio.play();
    if ( firstTime ) {
      $(audio).on('canplay', bind(function() {
        $(this).attr('class', 'glyphicon glyphicon-pause animated continuous slow flash');
      }, this));
      $(audio).on('ended', bind(trackEnded, this));
      $(this).attr('class', 'glyphicon glyphicon-cog animated continuous rotateInOut');
    } else {
      $(this).attr('class', 'glyphicon glyphicon-pause animated continuous slow flash');
    }
  };

  var pauseTrack = function() {
    $(this).attr('class', 'glyphicon glyphicon-play');
    $(this).find('audio')[0].pause();
  };

  var trackEnded = function() {
    $(this).attr('class', 'glyphicon glyphicon-play');
  };

  var trackClicked = function() {
    var e = $(this);
    if ( e.hasClass('glyphicon-pause') ) {
      pauseTrack.apply(this);
    } else if ( e.hasClass('glyphicon-play') ) {
      $('.glyphicon-pause').each(function() { pauseTrack.apply(this); });
      playTrack.apply(this);
    }
  };

  var preloadAudioPreviewUrl = function() {
    loadTrack.apply(this);
    $(this).click(trackClicked);
  };

  $(document).ready(function() {
    $('*[data-track-id]')
      .attr('class', 'glyphicon glyphicon-cog animated continuous rotateInOut')
      .each(preloadAudioPreviewUrl);
  });

  return {
    trackIdReceived: trackIdReceived
  };
}(jQuery));
