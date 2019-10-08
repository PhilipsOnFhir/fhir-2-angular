import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Task_Restriction      extends STU3_BackboneElement
{

   static def : string = 'Task_Restriction';
   repetitions : string ;
   period : STU3_Period ;
   recipient : STU3_Reference [];
}
