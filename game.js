var score = 0
var begin = alert("You are about to embark on a whirlwind adventure")
var playGame = confirm("Do you want to continue?")
if (playGame) {
  alert(`Let's Play`)
  score = score + 1
  var choice = prompt(`You are atop a snow covered mountain with a snowboard strapped to your feet.  There is fresh powder everywhere.

    Enter '1' if you want to go down the Black Diamond Mogul run.
    
    Enter '2' if you want to go to the SnowBoard Park.
    
    Enter '3' if you want to Free Ride in the back country.`)
  if (choice == 1) {
    score = score + 1
    var mogul = confirm(`Excellent choice.
      Do you charge it hard or take it easy?
    
      Click 'Ok' to charge it!
      click 'Cancel' to take it easy`)
    if (mogul == true) {
      score = score - 1
      alert(`You chose to charge it down the mogul run.  Unfortunately your skills didn't match the difficulty of the run.
        You ended up needing to be rushed to the hospital by Ski Patrol.
        
        Game Over!`)
    } else {
      score = score + 1
      alert(`Your choice to take it easy was wise and you were able to enjoy your run through the moguls. You had enough energy left to have a drink at the bar.
        We'll see you next weekend.
        
        Game Over!`)
    }
  } else if (choice == 2) {
    score = score + 2
    var park = prompt(`My personal favorite.
      What would you like to do in the park?  
      Enter '1' to ride the rails.
      
      Enter '2' for small jumps.
      
      Enter '3' to hit the Big Air jump.`)
    if (park == 1) {
      score = score + 1
      var rails = confirm(`Have you ridden rails in a snowboard park before?
        Click 'Ok' for yes.
        Click 'Cancel' for no.`)
      if (rails == true) {
        score = score + 2
        alert(
          `Because you have ridden some rails before, you will be just fine. You rip up the rails and have an awesome time while everyone cheers you on.
          
          Game Over!`
        )
      } else {
        score = score - 1
        alert(`You've never tried rails before and ended up hurting yourself on the first one.  Ski patrol is on the way.  Hang in there!

          Game Over!`)
      }
    } else if (park == 2) {
      score = score + 3
      var small = confirm(`Are you sure you are ready for some small jumps?
        Click 'Ok' for yes.
        Click 'Cancel' for no.`)
      if (small == true) {
        score = score + 3
        alert(`You are confident and hit the small jumps with no issues.  Keep learning and eventually you will hit that Big Air.
          
          Game Over!`)
      } else {
        score = score - 2
        alert(`You were hesitant and ended up breaking your snowboard.  Now you have to walk to the bottom of the hill.
          
          Game Over!`)
      }
    } else if (park == 3) {
      score = score + 4
      var bigAir = prompt(
        `On a scale from 1 (lacking) to 10 (almost professional), how confident are you in your snowboarding abilities?`
      )
      if (bigAir >= 0 && bigAir <= 3) {
        score = score + 3
        alert(`You probaly shouldn't be in this area. You need to find an easier way down
          
          Game Over!`)
      } else if (bigAir > 3 && bigAir <= 7) {
        score = score + 4
        alert(`You have enough skill to look good in the air, but you didn't land it.  Ski Patrol is on its way to you.  Hope they get there in time.
          
          Game Over!`)
      } else if (bigAir > 7 && bigAir < 11) {
        score = score * 2
        alert(`You defintely have the skills we are looking for.  You killed the jump and we would like to offer you a sponsorship to ride for our company.
          
          Game Over!`)
      } else {
        score = score / 2
        alert(`You didn't answer correctly and I would like it if you leave my mountain.
          
          Game Over!`)
      }
    } else {
      score = score / 2
      alert(`You didn't make an acceptable choice and Ski Patrol asked you to leave the mountain.
        
        Game Over!`)
    }
  } else if (choice == 3) {
    score = score + 4
    var freeRide = confirm(`Is having a powder day what you really want to do?
      Click 'Ok' for yes.
      Click 'Cancel' for no.`)
    if (freeRide == true) {
      score = score + 4
      alert(`Yes.  Fresh powder is something that can't be wasted.  Enjoy the beauty of shredding a blank cnavas.
        
        Game Over!`)
    } else {
      score = score - 3
      alert(`Really??? You are going to waste this opportunity to ride fresh powder?
        Good Day sir (he says condedcengingly)!
        
        Game Over!`)
    }
  } else {
    score = 0
    alert(`You didn't choose one of the provided options. Now you don't get to play.
      
      Game Over!`)
  }
} else {
  score = 0
  alert(`Maybe next time.
  Game Over`)
}

alert(`Thanks for playing.
Your score was: ${score}`)
