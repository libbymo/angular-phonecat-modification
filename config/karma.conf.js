basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/lib/angular/angular.js',
  'test/lib/angular/angular-mocks.js',
  'app/lib/angular/angular-cookies.min.js',
  'app/lib/angular/angular-loader.min.js',
  'app/lib/angular/angular-resource.min.js',
  'app/lib/angular/angular-sanitize.min.js',
  'app/js/**/*.js',
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
