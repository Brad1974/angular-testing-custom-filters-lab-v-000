describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter by favorite food', function () {
    var people = [
      {
        name: 'Jim',
        favoriteFood: 'jam'
      },
      {
        name: 'John',
        favoriteFood: 'jelly'
      }
    ];

    var results = $filter('favoriteFood')(people, 'jam');

    expect(results.length).toBe(1);
    expect(results[0].name).toBe('Jim');
  });

});
