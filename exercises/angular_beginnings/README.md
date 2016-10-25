Angular Setup - ng-repeat
23 JULY 2015 on Exercise, Angular, Web Applications, Level 1
Create an object called player. Player should have an array property called kills which stores an array of objects of other players they have killed.

Here is a data structure you can use, but you're welcome to add to/remove from it as you want. Just leave the property names the same:

var player = {  
    kills: [
        {
            handle: "jk400",
            rank: 14932,
            clan: ["hpburner200", "sputnik", "sololobo21"]
        },
        {
            handle: "dragonbobz",
            rank: 83655,
            clan: ["asdf", "sputnik", "peoplesrepublic"]
        },
        {
            handle: "joeschmoe",
            rank: 9274,
            clan: ["hpburner200", "sputnik", "sololobo21"]
        },
        {
            handle: "sarz",
            rank: 10,
            clan: ["peoplesrepublic", "asdf", "sololobo21"]
        },
        {
            handle: "zikamademethisway",
            rank: 9580,
            clan: ["hpburner200", "peoplesrepublic", "asdf"]
        }
    ]
}
Use ng-repeat to show the handle and rank of each player killed.

Then have an inner ng-repeat that shows each clan member of the killed player.

You can hardcode in the data in your .js file.