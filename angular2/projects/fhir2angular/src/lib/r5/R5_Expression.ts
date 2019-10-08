import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'
import { R5_ExpressionLanguageEnum } from './R5_ExpressionLanguageEnum'

export class R5_Expression      extends R5_Element
{

   static def : string = 'Expression';
   description : string ;
   name : string ;
   language : R5_ExpressionLanguageEnum ;
   expression : string ;
   reference : string ;
}
