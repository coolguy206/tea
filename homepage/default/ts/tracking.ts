export const tracking = (elem: string, id: string): void => {
  let a = $(elem);
  $.each(a, function(j: number, val: HTMLElement) {
    $(val).addClass('hp-url').attr({
      'data-page': 'home page',
      'id': id
    });
  });
};
