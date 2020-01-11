$(document).ready(function() {

    var actualList = $('.actual-list');
    var totalDuration = 0;
    var timeSpent;

    //Changing info for each exercise in list.
var dataDiv = $('#info-text-container');
var infoHeader = $('.info-header');

var classArray = document.getElementsByClassName('trainingItem');

    //Converting the total duration of the workout in a hh:mm format
    function convertMinsToHrsMins(mins) {
        let h = Math.floor(mins / 60);
        let m = mins % 60;
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        return `${h}:${m}`;
    }

    //var exercises = []; //all exercises
    //var chosenExercises = []; //chosen exercises by user through checkboxes
    var finalExercises = []; //final array to be worked with where name+duration is pushed

    //default container for an exercise
   function Exercise(name, duration) {
        this.name = name;
        this.duration = duration;
    }

    //to add to training, duration in minutes
    /*function addExercise(name, duration) {
        var e = new Exercise(name, duration);
        exercises.push(e);
    }*/

    //list of exercises to choose from
    /*addExercise("Biceps Curls", 6);
    addExercise("Chest Bench", 6);
    addExercise("Push-Ups", 6);
    addExercise("Cardio", 25);
    addExercise("Squats", 6);
    */


    //Getting all checked exercises
    var addButton = $('.addActivity');
    var timer = $('.timing');
    var clickedAdd = false;
    var info_header = $('.info-header');
    var changedOnce = false; //true after first added exercise


    function pushTraining() {
    	if(!clickedAdd) {
    		info_header.empty();
    		actualList.empty();
    		clickedAdd = true;

    		$("input:checkbox[name=optionsCheckboxes]:checked").each(function() {
    			var e = $(this).data('value');
    			info_header.append('<h1>'+e.name+'</h1>');
    			changedOnce = true;
    			if(changedOnce) return false;
        });
    	}

        $("input:checkbox[name=optionsCheckboxes]:checked").each(function() {
            var e = $(this).data('value');
            var eDuration = e.duration;

            finalExercises.push(e);
            totalDuration += eDuration;

            $(this).attr('disabled', true);
            $(this).prop('checked', "");

            var appendedId = e.name;
            appendedId = appendedId.replace(' ', '');
            appendedId = appendedId.replace('-', '');

        actualList.append('<li class="trainingItem'+' '+e.name+'" id="'+appendedId+'">'+e.name+'</li>');

        $('.trainingItem').on('click', 
        function (id)
        { 
            var infoText = $('#info1');
            var infoText_2 = $('#info12');
            var infoPhoto = $('#info2');
            var infoVid = $('#info3');

            var title = this.id;
            infoHeader.text(title);
            
            switch (this.id){
                case "BicepsCurls":
                    infoText.text(
                        "Stand up straight with a dumbbell in each hand at arm's length."+
                        "Keep your elbows close to your torso and rotate the palms of your hands until they are facing forward."+
                        "This will be your starting position."+
                        " Now, keeping the upper arms stationary, exhale and curl the weights while contracting your biceps."
                        );
                    infoPhoto.attr('src', 'css/img/bicepsIMG.jpg');
                    infoText_2.text("Check out the video below to see the correct form of doing this exercise");
                    infoVid.attr('src', 'https://www.youtube.com/embed/ykJmrZ5v0Oo');
                    break;
                case "ChestBench":
                    infoText.text(
                        "Your pectoral muscles are responsible for horizontal shoulder adduction, which is what happens when you push the weight off your chest with your shoulder joint."
                        +" The standard grip for a barbell bench press is a shoulder-width grip, but this only slightly stretches the pec muscles."
                        );
                    infoPhoto.attr('src', 'css/img/benchIMG.jpg');
                    infoText_2.text("Check out the video below to see the correct form of doing this exercise");
                    infoVid.attr('src', 'https://www.youtube.com/embed/rT7DgCr-3pg');
                    break;
                case "Cardio":
                    infoText.text(
                        "Cardio training is exercise with the purpose of developing cardiovascular or aerobic fitness."+ 
                        "Cardiovascular fitness is a good measure of the heart’s ability to pump oxygen-rich blood to the muscles."+
                        "Cardio training generally involves exercising at a constant moderate level of intensity, for a specified duration, during which the cardiovascular system is allowed to replenish oxygen to working muscles."+
                        "Typical activities include walking, jogging, cycling, swimming, jump rope, stair climbing, and rowing."
                        );
                    infoPhoto.attr('src', 'css/img/cardioIMG.jpg');
                    infoText_2.text("Check out the video below to find out some tips about cardio");
                    infoVid.attr('src', 'https://www.youtube.com/embed/K-tB6gJeVWE');
                    break;
                case "PushUps":
                    infoText.text("Push-Ups");
                    break;
                case "Squats":
                    infoText.text("Squats");
                    break;
                default:
                    infoText.text("To be added ...");
            }
        });

        });

        timeSpent = convertMinsToHrsMins(totalDuration);
        timer.text(timeSpent);

    }

    addButton.on('click', pushTraining);

});