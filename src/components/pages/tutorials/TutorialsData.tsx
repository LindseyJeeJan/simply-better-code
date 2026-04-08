export interface Tutorial {
  href: string;
  title: string;
  category: 'foundational' | 'component';
}

const TutorialsData: Tutorial[] = [
  {
    href: 'tutorials/tutorial-forms',
    title: 'Build Accessible Forms with React',
    category: 'component',
  },
  {
    href: 'tutorials/tutorial-todo-list',
    title: 'Build an Accessible Todo List with React',
    category: 'component',
  },
  {
    href: 'tutorials/tutorial-semantic-html',
    title: 'Semantic HTML in React',
    category: 'foundational',
  },
  {
    href: 'tutorials/tutorial-aria',
    title: 'Understanding ARIA in React',
    category: 'foundational',
  },
  {
    href: 'tutorials/tutorial-keyboard-navigation',
    title: 'Keyboard Navigation in React',
    category: 'foundational',
  },
  {
    href: 'tutorials/tutorial-modal',
    title: 'Build an Accessible Modal in React',
    category: 'component',
  },
  {
    href: 'tutorials/tutorial-navigation-menu',
    title: 'Build an Accessible Navigation Menu in React',
    category: 'component',
  },
  {
    href: 'tutorials/tutorial-accordion',
    title: 'Build an Accessible Accordion in React',
    category: 'component',
  },
  {
    href: 'tutorials/tutorial-alerts',
    title: 'Build Accessible Alerts and Notifications in React',
    category: 'component',
  },
];

export function getTutorialTitle(href: string): string {
  const tutorial = TutorialsData.find((t) => t.href === href);
  if (!tutorial) throw new Error(`Tutorial not found: ${href}`);
  return tutorial.title;
}

export default TutorialsData;
