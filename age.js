var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseFloat (prompt("Enter your age"));
     floatDays = floatAge * 365.25;
     floatMonths = floatAge * 12;
     intWeeks = floatDays / 7 ;
     intFortnights = floatDays / 14;
     alert("Initial age =" + floatAge +" years \n Days lived =" + floatDays + " \n Months lived =" + floatMonths + " \n Fortnights lived =" + intFortnights);
