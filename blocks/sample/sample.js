/**
 * Decorates the Sample block.
 * @param {Element} block
 */
export default function decorate(block) {
  const heading = block.querySelector('h2');

  if (heading) {
    heading.classList.add('sample-heading');
  }

  const button = block.querySelector('a');

  if (button) {
    button.classList.add('sample-button');
  }
}
