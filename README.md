itunes-previewer.js
===================

[![Build Status](https://travis-ci.org/bspaulding/itunes-previewer.js.png?branch=master)](https://travis-ci.org/bspaulding/itunes-previewer.js) [![Code Climate](https://codeclimate.com/github/bspaulding/itunes-previewer.js.png)](https://codeclimate.com/github/bspaulding/itunes-previewer.js)

Mobile friendly, HTML5 audio previews of iTunes tracks. No extra JS required.

Demo
----

[alisontrick.com/music](http://bspaulding.github.io/alisontrick.com/music.html)

Dependencies
------------

itunes-previewer currently assumes the availability of the play, pause, and cog glyphicons packaged with Bootstrap 3.

Optionally, it calls upon animations from animate.css, including a custom animation: ```rotateInOut```. A Pull Request to get this animation into Animate is in the works.

Usage
-----

Load after jQuery:

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="//github.com/bspaulding/itunes-previewer.js/raw/master/lib/itunes-previewer.js"</script>
```

Decorate HTML with an iTunes track ID:

```html
<span data-track-id="569944991" class="glyphicon glyphicon-cog animated continuous rotateInOut"></span>
```

Todo
----

- rotateInOut PR for animate.css
- extract requirement on animate.css and bootstrap's glyphicons
