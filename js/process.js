function showModal(header, body){
  $('.modal').modal();
  $("#modal-header").html(header);
  $("#modal-body").html(body);
  $('.modal').modal('open');
}
function hideModal(){
  $('.modal').modal('close');
}
var wordList = [
 "Apparatus", "Legend", "Lace", "Preferred", "Rehearsal", "Precede", "Hygiene", "Influential", "Mischievous", "Ridiculous", "Villain", "Undoubtedly", "Strenuous", "Prosperous", "Pneumonia", "Buffet", "Colonel", "Choir", "Catastrophic", "Brewery", "Explicit", "ignominious", "phenomenon", "Unaesthetic", "Squirrel", "penguin", "cemetery", "rhythm", "affluent", "Anesthesia", "bereft", "disrepute", "duress", "edict", "emollient", "empirical", "fractious", "garrulous", "hapless", "insidious", "portent", "sobriety", "swarthy", "umbrage", "upbraid", "veracity", "Epiglottis", "Astronaut", "Scarce", "Conscious", "Psychiatry", "Hierarchy", "Consistory", "Interdict", "Marquee", "Accursed", "Precaution", "Antagonist", "Deceive", "Philanthropist", "Disguise", "Besotted", "Mediterranean", "Foxtrot", "Plagiarism", "Judiciary", "Privilege", "Wander", "Athlete", "Accommodate", "Apology", "Architect", "Aerial", "Anxious", "Perceive", "Sanctuary", "Sieve", "Predecessor", "Rehearsal", "Negligence", "Mesmerize", "Inconvenience", "Miscellaneous", "Excessive", "Apostrophe", "Abstain", "Abbreviate", "Alien", "Gnawing", "Deficient", "Penalty", "etiquette", "impasse", "aesthetic", "ecstatic", "pheasant", "grocery", "champagne", "bureau", "bouquet", "harass", "embarrass", "license", "Separate", "solemn", "Enthusiastic", "Injurious", "Antique", "Bribery", "Management", "Boycott", "Bracelet", "Appetite", "Balcony", "Cassette", "Counseling", "Volunteer", "Vacuum", "Transferring", "Trolleys", "Existence", "Furniture", "Genuine", "Glacier", "Typhoid", "Inaugurate", "Legendary", "Murmured", "Occasional", "Occurrence", "Plateau", "Refugee", "Sergeant", "Syringe", "Synonymous", "Pavilion", "Disastrous", "Warrant", "Engineering", "Census", "Cabinet", "Ingredients", "Scissor", "Yoghurt", "Forecaster", "Auditorium", "Millionaire", "prophecy", "vacuum", "wrestle", "inopportunity", "illegible", "commercial", "dialogue", "ravine", "entrepreneur", "rhyme", "rhythm", "feathered", "synthesize", "mesmeric", "unappealing", "magnificent", "tremble", "overwhelming", "zealous", "exhilarator", "aggrieved", "mauled", "wrapped", "prejudice", "soreness", "squeeze", "questionnaire", "whipsaw", "mechanism", "hyphenated", "hippopotamus", "territory", "syringe", "rigging", "rescission", "dissimulation", "commissioner", "misapprehend", "glycerin", "galleon", "myriad", "extravagant", "indignity", "patchy", "gymnasium", "imminent", "iniquitous", "irresistible", "knuckle", "peerage", "mulberry", "scourge", "succulent", "precipitous", "liquored", "exuberance", "exenterate", "alliances"
];

var app = new Vue({
    el: '#typing-application',
    data: function(){
    return {
      correctspelling: '',
      wordlist: wordList,
      loading: false,
      time: (40/60),
      remaining_time: 0,
      play: false,
      intr: null,
      currentWord: '',
      status: 'normal',
      wrong: 0,
      right: 0,
      resultannounced: false,
    }
  },
  watch: {
    status: function(){
      this.correctspelling = this.wordlist[this.currentWord-1];
    }
  },
  methods: {
    reload: function(){
      document.location.href = document.location.href;
    },
  	pad: function(d){
      return (d < 10) ? '0' + d.toString() : d.toString();
    },
    init: function () {
    	if(!this.play){
    		this.play = true;
	    	_this = this;
	            this.intr = setInterval(function(){
	          	if(_this.remaining_time > 0){
	            	_this.remaining_time = _this.remaining_time - 1;
                if(_this.remaining_time == 10){
                  $("#buzzer")[0].play();
                }
	            }else{
                _this.resultannounced = true;
              }
	          }, 1000);
          }else{
          	clearInterval(this.intr);
          	this.play = false;
          }
    }
  },
  mounted: function(){
    $("body").removeClass("grey lighten-4");
    $("body").addClass("grey lighten-4");
    this.remaining_time = this.time * 60;
  }
});