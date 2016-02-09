'use strict';

function CopyProvider () {
    var text = null;

    this.setText = function (textString) {
        text = textString;
    };

    this.$get = [function () {
        return new Copy(text);
    }];
}
