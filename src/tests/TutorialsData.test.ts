import TutorialsData, { getTutorialTitle } from 'components/pages/tutorials/TutorialsData';

test('every tutorial has href, title, and category', () => {
  TutorialsData.forEach((t) => {
    expect(t.href).toBeTruthy();
    expect(t.title).toBeTruthy();
    expect(['foundational', 'component']).toContain(t.category);
  });
});

test('getTutorialTitle returns title for known slug', () => {
  expect(getTutorialTitle('tutorials/tutorial-forms')).toBe('Build accessible forms with React');
});

test('getTutorialTitle throws for unknown slug', () => {
  expect(() => getTutorialTitle('tutorials/does-not-exist')).toThrow();
});

test('foundational category has 3 entries', () => {
  expect(TutorialsData.filter((t) => t.category === 'foundational')).toHaveLength(3);
});

test('component category has 6 entries', () => {
  expect(TutorialsData.filter((t) => t.category === 'component')).toHaveLength(6);
});
