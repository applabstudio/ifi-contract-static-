/** divided modal in two tabs for search */

const dom={
	datasearch:'[data-search]',
	menu:'[data-menu]',
	datamodal:'[data-modal]',
	closeSearch:'[data-close-search]',
	openSearch:'[data-open-search]'

}
const searchForm=document.querySelector(dom.datasearch);
const searchClose=()=>{

	searchForm.classList.remove('show-search');
	document.querySelector(dom.menu).classList.remove('close-search');
}
const searchOpen=()=>{
	
	searchForm.classList.add('show-search');
	document.querySelector(dom.menu).classList.add('close-search');
}

const search_modal= () =>{

	const searchBtn=document.querySelector(dom.openSearch);
	const closeSearch=	document.querySelector(dom.closeSearch);

	searchBtn.addEventListener('click',searchOpen);
	closeSearch.addEventListener('click',searchClose);



}

export default {
	init:search_modal,
};