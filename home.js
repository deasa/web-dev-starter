
let person = {
    name: 'John',
    age: 32,
    partTime: false,
    showInfo: function(realAge){
        showMessage(this.name + " is " + realAge)
    }
}

person.showInfo(34); 

changePercentOff(99);

const reviewBtn = document.getElementById('review-button');

reviewBtn.addEventListener('click', function(){
    const reviewBox = document.getElementById('review');

    if (reviewBox.classList.contains('d-none')){
        reviewBox.classList.remove('d-none')
        reviewBtn.textContent = "HIDE REVIEW";
    }
    else {
        reviewBox.classList.add('d-none');
        reviewBtn.textContent = "SEE REVIEW";
    }
})