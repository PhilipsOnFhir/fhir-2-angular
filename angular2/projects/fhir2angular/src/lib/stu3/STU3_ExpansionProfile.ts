import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ContactDetail } from './STU3_ContactDetail'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ExpansionProfile_Designation } from './STU3_ExpansionProfile_Designation'
import { STU3_ExpansionProfile_ExcludedSystem } from './STU3_ExpansionProfile_ExcludedSystem'
import { STU3_ExpansionProfile_FixedVersion } from './STU3_ExpansionProfile_FixedVersion'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_PublicationStatusEnum } from './STU3_PublicationStatusEnum'
import { STU3_UsageContext } from './STU3_UsageContext'

export class STU3_ExpansionProfile      extends STU3_DomainResource
{

   static def : string = 'ExpansionProfile';
   url : string ;
   identifier : STU3_Identifier ;
   version : string ;
   name : string ;
   status : STU3_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : STU3_ContactDetail [];
   description : string ;
   useContext : STU3_UsageContext [];
   jurisdiction : STU3_CodeableConcept [];
   fixedVersion : STU3_ExpansionProfile_FixedVersion [];
   excludedSystem : STU3_ExpansionProfile_ExcludedSystem ;
   includeDesignations : boolean ;
   designation : STU3_ExpansionProfile_Designation ;
   includeDefinition : boolean ;
   activeOnly : boolean ;
   excludeNested : boolean ;
   excludeNotForUI : boolean ;
   excludePostCoordinated : boolean ;
   displayLanguage : string ;
   limitedExpansion : boolean ;
}
