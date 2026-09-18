const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();
    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        //obj.success(xhr.responseText); forma antiga sem promise
        resolve(xhr.responseText);
      } else {
        //obj.error(xhr.statusText); forma antiga sem promise
        reject(xhr.statusText);
      }
    });
  })
};

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();
  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
})

// function carregaPagina(el) { sem async
  async function carregaPagina(el) {
  const href = el.getAttribute('href');

  const objConfig = {
    method: 'GET',
    url: href,
    // success(response) {
    //   carregaResultado(response); 
    // }, não é necessario quando se usa promise, porque já tem o resolve e o reject pra isso
    // error(errorText) {
    //   console.log(errorText);
    // }
  };
  
  // request(objConfig).then(response => {
  //   carregaResultado(response) forma usando o then
  // }).catch(error => console.log(error));
  try {
  const response = await request(objConfig);
  carregaResultado(response);
  }
  catch(error) {
    console.log(error)
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}