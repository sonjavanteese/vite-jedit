import {
	createClient
} from '@supabase/supabase-js'

export const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_ANON_KEY
);

//  export default supabase;


export const appData = [{"id":0,"slug":"start","head":{"titel":"Nwp-Studio","sub":"Startseite","bg":"https://nwp-cgn.de/img/poser/imgA01.png"},"link":{"path":"/","name":"Start","icon":"home"},"files":[{"titel":"Slide 1","file":"https://nwp-cgn.de/img/poser/imgA01.png"}]},{"id":1,"slug":"list","head":{"titel":"Archiv-Jedit","sub":"Json-Editor","bg":"https://nwp-cgn.de/img/poser/imgA02.png"},"link":{"path":"/list","name":"List","icon":"server"},"files":[]},{"id":2,"slug":"editor","head":{"titel":"Nwp-Editor","sub":"Json-Editor","bg":"https://nwp-cgn.de/img/poser/imgA04.png"},"link":{"path":"/editor","name":"Editor","icon":"camera"},"files":[]}];

export const pages = appData.map((x) => x.head);
export const navi = appData.map((x) => x.link);