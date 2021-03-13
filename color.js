  var body = {
    set_commontext_color: function(color){
      document.querySelector('body').style.color = color;
    },
    set_background_color: function(color){
      document.querySelector('body').style.backgroundColor = color;
    }
    }
  function setcolor(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i<alist.length)
    {
    alist[i].style.color = color;
    i++;
    }
  }

  function nigth_mode(self){
    var target_style = document.querySelector('body').style;
    if(self.value === 'night')
      {
      body.set_background_color('black');
      body.set_commontext_color('white');
      self.value = 'day';

      setcolor('powderblue');
      }


    else
      {
      body.set_background_color('white');
      body.set_commontext_color('black');
      self.value = 'night';

      setcolor('pink');
      }
      }
