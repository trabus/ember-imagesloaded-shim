/* globals Image */
import { test } from 'qunit';
import Ember from 'ember';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | imagesloaded');

test('verifying imagesloaded import', function(assert) {
  visit('/');
  let tmpImg = new Image();
  tmpImg.src = 'image.jpg';
  let failed = false;
  let images = Ember.$([tmpImg]).imagesLoaded()
    .fail((instance)=> {
        failed = instance.images[0].img.src.indexOf('image.jpg') > -1;
    });
  andThen(function() {
    assert.equal(images.length, 1);
    assert.ok(failed);
  });
});
