export const inview = (elem: string): void => {
  $(elem).on('inview', function(event: any, isInView: boolean) {
    if (isInView) {
      let imgs = $(this).find('img');
      $.each(imgs, function(i: number, val: HTMLElement) {
        let src = $(val).attr('data-set');
        if (src) {
          $(val).attr('src', src);
        }
        $(val).removeAttr('data-set');
      });
      $(this).css('opacity', '1');
    }
  });
};
