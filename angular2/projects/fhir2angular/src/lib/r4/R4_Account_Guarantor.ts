import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_Account_Guarantor      extends R4_BackboneElement
{

   static def : string = 'Account_Guarantor';
   party : R4_Reference ;
   onHold : boolean ;
   period : R4_Period ;
}
