let stars = document.querySelectorAll(".fa-star");

let starIndex = 0

stars.forEach((star, index)=>{
    star.addEventListener('click', ()=>{
        
        upDateRating(index);
    });
});


function upDateRating(index){
    stars.forEach((star, indx)=>{
            if (indx < index + 1){
                star.classList.add('active');
            }
            else{
                star.classList.remove('active');
            }
    })


};