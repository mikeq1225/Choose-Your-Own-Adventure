var begin = alert("You are about to embark on a whirlwind adventure")

var playGame = confirm("Do you want to continue?")
if (playGame) {
  alert(`Let's Play`)
  var choice = prompt(`You are atop a snow covered mountain with a snowboard strapped to your feet.  There is fresh powder everywhere.

    Enter '1' if you want to go down the Black Diamond Mogul run.
    
    Enter '2' if you want to go to the SnowBoard Park.
    
    Enter '3' if you want to Free Ride in the back country.`)
  if (choice == 1) {
    var mogul = confirm(`Excellent choice.
      Do you charge it hard or take it easy?
    
      Click 'Ok' to charge it!
      click 'Cancel' to take it easy`)
    if (mogul == true) {
      alert(`You chose to charge it down the mogul run.  Unfortunately you skills didn't match the difficulty of the run.
        You ended up needed to be rushed to the hospital bt Ski Patrol.
        
        Game Over!`)
    } else {
      alert(`Your choice to take it easy was wise abd you were able to enjoy your run through the moguls. You had enough energy left to have a drink at the bar.
        We'll see you next weekend.
        
        Game Over!`)
    }
  } else if (choice == 2) {
    var park = prompt(`My personal favorite.
      What would you like to do in the park?  
      Enter '1' to ride the rails.
      
      Enter '2' for small jumps.
      
      Enter '3' to hit the Big Air jump.`)
    if (park == 1) {
      var rails = confirm(`Have you ridden rails in a snowboard park before?
        Click 'Ok' for yes.
        Click 'Cancel' for no.`)
      if (rails == true) {
        alert(
          `Because you have ridden some rails before, you will be just fine. You rip up the rails and have an awesome time while everyone cheers you on.`
        )
      } else {
        alert(`You've never tried rails before and ended up hurting yourself on the first one.  Ski patrol is on the way.  Hang in there!

          Game Over!`)
      }
    } else if (park == 2) {
      var small = confirm(`Are you sure you are ready for some small jumps?
        Click 'Ok' for yes.
        Click 'Cancel' for no.`)
      if (small == true) {
        alert(`You are confident and hit the small jumps with no issues.  Keep learning and eventually you will hit that Big Air.
          
          Game Over!`)
      } else {
        alert(`You were hesitant and ended up breaking your snowboard.  Now you have to walk to the bottom of the hill.
          
          Game Over!`)
      }
    } else if (park == 3) {
      var bigAir = prompt(
        `On a scal from 1 (lacking) to 10 (almost professional), how confident are you in your snowboarding abilities?`
      )
      if (bigAir >= 0 && bigAir <= 3) {
        alert(`You probaly shouldn't be in this area. You need to find an easier way down
          
          Game Over!`)
      } else if (bigAir > 3 && bigAir <= 7) {
        alert(`You have enough skill to look good in the air, but you didn't land it.  Ski Patrol is on its way to you.  Hope they get there in time.
          
          Game Over!`)
      } else if (bigAir > 7 && bigAir < 11) {
        alert(`You defintely have the skills we are looking for.  You killed the jump and we would like to offer you a sponsorship to ride for our company.
          
          Game Over!`)
      } else {
        alert(`You didn't answer correctly and I would like it if you leave my mountain.
          
          Game Over!`)
      }
    } else {
      /*} else if (park == 3) {
        var bigAir = confirm(`Are you sure you have the guts to get almost 3 seconds of hang time?
        Click 'Ok' for yes.
        Click 'Cancel' for no.`)
        if (bigAir == true) {
          alert(`I like your bravado.  Confidence always pays off.  Bir Air is where the fame is.
          You Rock!
          
          Game Over!`)
        } else {
          alert(`Big Air isn't for you, but since you are here you may as well hit it!
          
          It doesn't end well.  You end up in the hospital for months.
          
          Game Over!`)
        }
      }*/
      alert(`You didn't make an acceptable choice and Ski Patrol asked you to leave the mountain.
        
        Game Over!`)
    }
  } else if (choice == 3) {
    var freeRide = confirm(`Is having a powder day what you really want to do?
      Click 'Ok' for yes.
      Click 'Cancel' for no.`)
    if (freeRide == true) {
      alert(`Yes.  Fresh powder is something that can't be wasted.  Enjoy the beauty of shredding a blank cnavas.
        
        Game Over!`)
    } else {
      alert(`Really??? You are going to waste this opportunity to ride fresh powder?
        Good Day sir!
        
        Game Over!`)
    }
  } else {
    alert(`You didn't choose one of the provided options. Now you don't get to play.
      
      Game Over!`)
  }
} else {
  alert(`Maybe next time.
  Game Over`)
}
