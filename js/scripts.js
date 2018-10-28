$(document).ready(function(){
  var burger = $('.menu__btn'),
      menu = $('.menu__wrapper');
  
  burger.on('click', function(){
    if(menu.hasClass('active')){
      burger.removeClass('active');
      menu.removeClass('active');
    } else {
      burger.addClass('active');
      menu.addClass('active');
    }      
  })
})

$(document).ready(function() {
  
  function tabInit(parent){
    var header = $(parent).find('.tabs__header'),
        titles = header.find('.tabs__btn'),
        content = $(parent).find('.tabs__content').find('.tab');
    
    $(titles).on('click', function(){
      content.removeClass('active');
      titles.removeClass('active');
      
      var btn = $(this)[0];
      
      var activeTab = content.filter((index, el) => {
        return $(el)[0].dataset.type === btn.dataset.type
      })[0];
      
      $(activeTab).addClass('active');
      $(this).addClass('active');
      
      if(window.innerWidth < 770){        
        header.removeClass('open');
        header.append(titles.sort(el => $(el).hasClass('active') ? -1 : 1)); 
      }
      
    }) 
    
    if(window.innerWidth < 770){
      header.append('<button class="tabs__dropdown"><span></span></button>')
      $(parent).on('click', '.tabs__dropdown', function(){
        var tabsHeader = $(this).parent('.tabs__header');

        tabsHeader.hasClass('open') 
          ? tabsHeader.removeClass('open') 
          : tabsHeader.addClass('open');
      })
    }
    
  }
  
  tabInit('.tabs');
})

$('.dropdown__item').on('click', function(){
  var parent = $(this).closest('.dropdown'),
      items = parent.find();
  parent.addClass('open');
  items.on('click', function(){
    $(this).addClass('active');
    parent.removeClass('open');
  })
})