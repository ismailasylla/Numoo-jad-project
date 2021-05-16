import { getFromStorage, emptyObject } from "../utils";

const savedLang = !emptyObject(getFromStorage('siteLang')) ? getFromStorage('siteLang') : 'en_US'

export default {
	siteLang: savedLang
}