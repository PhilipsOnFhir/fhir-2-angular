import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ExpansionProfile_Exclude } from './STU3_ExpansionProfile_Exclude'
import { STU3_ExpansionProfile_Include } from './STU3_ExpansionProfile_Include'

export class STU3_ExpansionProfile_Designation      extends STU3_BackboneElement
{

   static def : string = 'ExpansionProfile_Designation';
   include : STU3_ExpansionProfile_Include ;
   exclude : STU3_ExpansionProfile_Exclude ;
}
