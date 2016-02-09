'use strict';

angular.module('inkfish.version', [
  'inkfish.version.interpolate-filter',
  'inkfish.version.version-directive'
])

.value('version', '0.0.1');
