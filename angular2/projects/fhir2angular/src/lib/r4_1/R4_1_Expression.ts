import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'
import { R4_1_ExpressionLanguageEnum } from './R4_1_ExpressionLanguageEnum'

export class R4_1_Expression      extends R4_1_Element
{

   static def : string = 'Expression';
   description : string ;
   name : string ;
   language : R4_1_ExpressionLanguageEnum ;
   expression : string ;
   reference : string ;
}
