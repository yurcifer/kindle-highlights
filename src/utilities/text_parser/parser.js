import {store} from './../../store/index.js'



export const uploadFile = async (e) => {

  e.preventDefault();
  const reader = new FileReader();

  reader.onload = async (e) => {
    const text = (e.target.result);

    const segments = text.split('==========');
    const highlighsArray = [];
    
    segments.forEach( (item) => {
      item = item.replace(/\r/g, '');
      item = item.replace(/^$/, '');
      // console.log(JSON.stringify(item));
      
      const splited = item.split(/\n/);
      for (let index in splited) {
        if (splited[index].length === 0) {
          splited.splice(index, 1);
        }
      }
      if (!splited[2]) return;
      console.log(splited);
      highlighsArray.push(
        {
          title: splited[0],
          meta: splited[1],
          highlight: splited[2]
        }
      );

    })

    store.dispatch({type: 'INIT', data: highlighsArray});
  };
  reader.readAsText(e.target.files[0]);

}



