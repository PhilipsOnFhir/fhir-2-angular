import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ExpansionProfile_Designation1 } from './STU3_ExpansionProfile_Designation1'

export class STU3_ExpansionProfile_Include      extends STU3_BackboneElement
{

   static def : string = 'ExpansionProfile_Include';
   designation : STU3_ExpansionProfile_Designation1 [];
}
