import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_Task_Restriction      extends R4_BackboneElement
{

   static def : string = 'Task_Restriction';
   repetitions : string ;
   period : R4_Period ;
   recipient : R4_Reference [];
}
