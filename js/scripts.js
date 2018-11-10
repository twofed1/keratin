$(document).ready(function() {
  /*menu*/
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
  
  
  /*dropdown*/
  $('.caret').on('click', function(){
    var parent = $(this).closest('.dropdown'),
        items = parent.find('.dropdown__item');

    if(parent.hasClass('open')){
      return parent.removeClass('open');
    }
    
    parent.addClass('open');

    items.on('click', function(){
      items.removeClass('active');
      $(this).addClass('active');

      parent.removeClass('open');
      parent.find('.dropdown__list').append(items.sort(el => $(el).hasClass('active') ? -1 : 1));
    })
  });
  
  
  /*tab function*/
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
  
  /*init tabs*/
  tabInit('.tabs');
  
  
  /*counter*/
  var add = $('.counter').find('.add'),
      ded = $('.counter').find('.ded'),
      count = $('.counter').find('.count')[0],
      value = Number($('.counter').find('.count')[0].innerText);
  
  add.on('click', function(){
    value = value + 1;
    $(count).text(value);
  })
  
  ded.on('click', function(){    
    value = value > 0 ?  value - 1 : 0;
    $(count).text(value);
  })
  
  
  /*volume change*/
  $('.volume__item').on('click', function(){
    $(this).siblings('.volume__item').removeClass('active');
    $(this).addClass('active');
  });
})