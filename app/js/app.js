document.addEventListener('DOMContentLoaded', () => {

  const handleFormInput = function(event){

    event.preventDefault();

    const newTune = document.createElement('ul');

    const newTrackTitle = document.createElement('li');
    newTrackTitle.textContent = `Track: ${event.target.title.value}`;

    const newArtist = document.createElement('li');
    newArtist.textContent = `Artist: ${event.target.artist.value}`;

    const newYear = document.createElement('li');
    newYear.textContent = `Year: ${event.target.year.value}`;

    const newCategory = document.createElement('li');
    newCategory.textContent = `Category: ${event.target.category.value}`;

    const newTuneItem = document.querySelector('#chart');
    newTuneItem.appendChild(newTune);

    newTune.appendChild(newTrackTitle);
    newTune.appendChild(newArtist);
    newTune.appendChild(newYear);
    newTune.appendChild(newCategory);

    formInput.reset();
  }

  const formInput = document.querySelector('#new-tune-form');
  formInput.addEventListener('submit', handleFormInput);

})
