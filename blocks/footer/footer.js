import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const localeCodes = ['na', 'emea','apac','sa'];
  const urlPath = window.location.pathname;
  const urlParameters = urlPath.split('/').filter(segment => segment !== "");
  console.log(urlParameters);
  
  const countryCode = (urlParameters[0] || 'na').toLowerCase();
  console.log(countryCode);
  
  const regionCode = localeCodes.includes(countryCode)?countryCode:'na';
  /*
  *  calling method
  *  const regionCode = getSitePathfromURL(window.location.pathname);
  */
  
  const footerPath = `/${regionCode}/footer`;
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);
}





/*
*  Create function and call with url path
*
*/


export function getSitePathfromURL(pagePath){

  const existingSiteCodes = ['na', 'emea', 'sa', 'apac']; 
  const siteCodeArray = pagePath.split('/').filter(segment => segment !== "");
  const siteCode = (siteCodeArray[0] || 'na').toLowerCase();
  const countryCode = existingSiteCodes.includes(siteCode)?siteCode:'na';
  return countryCode;

}