import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Account_Guarantor      extends R4_1_BackboneElement
{

   static def : string = 'Account_Guarantor';
   party : R4_1_Reference ;
   onHold : boolean ;
   period : R4_1_Period ;
}
