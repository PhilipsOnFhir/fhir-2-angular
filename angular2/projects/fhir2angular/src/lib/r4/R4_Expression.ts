import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'
import { R4_ExpressionLanguageEnum } from './R4_ExpressionLanguageEnum'

export class R4_Expression      extends R4_Element
{

   static def : string = 'Expression';
   description : string ;
   name : string ;
   language : R4_ExpressionLanguageEnum ;
   expression : string ;
   reference : string ;
}
