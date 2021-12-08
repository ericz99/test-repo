'use strict';

module.exports = {
  up: (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    return queryInterface.bulkInsert('Comments', [
      {
        id: '5cc18c96-08fe-4474-a8f7-c6718320a2cf',
        postId: '1',
        body: 'This is a test body',
        name: 'asgawgga',
        email: 'test@yahoo.com'
      },
      {
        id: 'c3ddc84a-73a5-4984-873c-ba3f3eb8ad5e',
        postId: '2',
        body: 'This is a test body 2',
        name: 'asgawgga',
        email: 'test123@yahoo.com'
      }
    ]);
  },

  down: (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete('Comments', null, {});
  }
};
