import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Account_Coverage      extends STU3_BackboneElement
{

   static def : string = 'Account_Coverage';
   coverage : STU3_Reference ;
   priority : string ;
}
