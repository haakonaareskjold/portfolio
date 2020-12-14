function pipeline() {
  return 'Here are some projects made by me:';
}

test('string outputs: Here are some projects made by me:', () => {
  expect(pipeline()).toMatch('Here are some projects made by me:');
});