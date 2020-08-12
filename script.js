navigator.sayswho= (function(){
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
    })();

    console.log(navigator.sayswho)
    var head = document.getElementsByTagName('HEAD')[0];  
    var link = document.createElement('link');

    if(navigator.sayswho.startsWith("Opera")){

      link.rel = 'stylesheet';
      link.type = 'text/css'
      link.href = 'Opera.css'
      head.appendChild(link);

    } else if(navigator.sayswho.startsWith("Chrome")){
        link.rel = 'stylesheet';
        link.type = 'text/css'
        link.href = 'Chrome.css'

        head.appendChild(link);
    } else {
      head.appendChild(link); 
      console.warn('Your browser isn\'t supported. Webpage may look dissoriented.')
      alert('Your browser isn\'t supported. Webpage may look dissoriented.')
      link.rel = 'stylesheet'
      link.type = 'text/css'
      link.href = 'Chrome.css'
      head.append(link)
    };