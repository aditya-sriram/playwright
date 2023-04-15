import { vsprintf } from "printj";

export function formatString(msg: string | undefined): string | undefined {
    if (!msg) return msg;
    var match = /(\%.)(?!.*\1)/.exec(msg);
    if (match) {
        var idx = match.index + 2;
        var substitution_section = msg.substring(0, idx).trim();
        var substitution = msg.substring(idx).trim();
        var substitution_matches = msg.match(/\%./g);
        if (substitution_matches) {
          var count = substitution_matches.length;
          var substitution_split = substitution.split(" ")
          var valid = count == substitution_split.length;
          console.log(valid);
          if (valid) {
            msg = vsprintf(substitution_section, substitution_split);
          }
        }
    }
    return msg;
  }