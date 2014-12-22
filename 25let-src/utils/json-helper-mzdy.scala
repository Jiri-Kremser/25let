// http://www.czso.cz/csu/redakce.nsf/i/pmz_cr
// http://www.czso.cz/csu/2014edicniplan.nsf/t/D9003FD9A8/$File/3201814_0503.pdf

val rows = List(
List(1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013),
List(5904,7004,8307,9825,10802,11801,12797,13594,14750,15911,16905,18025,18940,20158,21621,23430,24242,24453,24494,25014,25254),
List(18.6,18.6,18.3,9.9,9.4,8.4,6.2,8.5,8.8,8.0,5.8,6.3,5.0,6.6,7.2,7.8,3.3,2.2,2.5,2.5,0.0),
List(-2.2,8.6,9.2,1.1,0.9,-2.3,4.1,4.6,3.9,6.1,5.7,3.4,3.0,4.0,4.3,1.4,2.3,0.7,0.6,-0.8,-1.4)
).transpose

  println(s"""{
    "series": ["Nominalní růst/pokles", "Reálný růst (očištěný o inflaci"],
    "data": [""")

rows.zipWithIndex foreach { case (row, i) => 
  println(s"""      {
        "x": "${row(0)}",
        "y": [${row(2)}, ${row(3)}],
        "tooltip": "Průměrná mzda: <b>${row(1)}</b> Kč<br>Nominální růst: ${row(2)} %<br>Reálný růst: ${row(3)} %"
      }${if (i==rows.size-1) "" else ","} """)
}

  println(s"""   ]
}""")
